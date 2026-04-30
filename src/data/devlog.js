export const devlogEntries = [
  {
    id: 'offscreencanvas-signalr-queue',
    title: "OffscreenCanvas and the SignalR Queue",
    date: '2026-04-14',
    projectSlug: 'terramachina',
    projectName: 'TerraMachina',
    preview: "Streaming 320,000 triangles over SignalR to a React client sounds straightforward until the messages start disappearing. No errors, no warnings. Just missing triangles and a very unhelpful black screen. Notes on chasing the problem through the stack and why the fix ended up being OffscreenCanvas and Web Workers.",
    body: [
        "Server side icosphere generation complete. Now we just hook it up and send it to the client. Everything is ready, punch it!", 
        "Nothing. Just a black screen where I should have a brand new cool icosphere to look at. Console? SignalR timed out.",
        "Sending the full icosphere was apparently too much. Now I could have tuned the batch size until it stopped timing out, but that felt questionable. Any future optimization that allowed me to increase cell count would force me to go back and redo it. So we bundle it up and send it in batches. Easy enough.", 
        "Pause...", 
        "This is actually just better. Streaming the sphere one triangle at a time, building it visually as generation runs, would look so NICE!",
        "A few quick easy updates later. Start it up!", 
        "Why are triangles missing? Eh, try it again... different ones are missing. Alrighty then.", 
        "Let's just log every outgoing message on the server and every incoming message on the client and I'll number them for good measure. Everything was sent, but not everything was received. Everything is running locally and we haven't even touched the actual internet. Where did they go? Let's ask the WebSocket. It got them all. And the first thing the client has been set to do with them is log them. So somewhere in that space we are losing them. An there's only one thing in there.",
        "Guess I should have read more of the documentation before setting up SignalR.",
        "One deep dive into how SignalR's JS client handles throughput turned up the answer. It maintains an internal queue, and anything past its length gets silently tossed. No errors, no warnings. Cause who really needed that particular message anyways.",
        "Okay so maybe 20,000 messages was too many too fast. I'll just add a delay between sends so the queue never overflows. I'm sure it won't need much.", 
        "10ms. 20ms.", "50ms. That works. But it's so slow! Larger batches then! If there are only 320 messages at 50ms that's not too bad. That's only 16 seconds, and it's basically animated. Easy math.", 
        "50ms. Nope, doesn't work anymore. Surely I won't need to go much higher...", "60ms. 70ms. 100ms.", "500ms. Okay that one worked. Let's walk it back down.", 
        "400ms? Good.", "300ms? Still working.", "200ms? Fine.", "150ms? No.", 
        "So 200ms per message at 320 messages. I think watching seeds sprout in real time might be more fun. Sure it works, but who is going to sit there for a full minute waiting on a single icosphere in 2026? No one. I didn't even do it. I went and got a drink.",
        "One caffeinated soda of choice, and we are back at it.", 
        "Maybe we come at it from the other side. If the queue fills too fast, we will just empty it faster. What's the most expensive thing the client does?", 
        "Research says... mesh rebuilding. Sensible. But who said we have to rebuild it every time. The Float32Array that can't be resized did? Ugh. What a jerk.", 
        "Wait a minute... The client tells the server how many triangles to make. So, pre-allocating that array and writing to it incrementally means I can swap full mesh rebuilds for a cheap draw call update. That only brings the per message delay down to 100ms. Still a full 30 seconds. Yeah, that's not going to cut it.",
        "Guess I need to do some more reading. I wonder if anyone has come up with any neat tricks for this.", 
        "Oh. JS is single threaded by default. So it can't pull a message from the SignalR queue until it finishes processing the last one. Okay, that makes sense. At least I know the problem with certainty now.",
        "And that's when Web Workers entered the picture. Isolated scripts running on their own thread, and even better, they have a separate message queue that doesn't overflow like SignalR's does. Okay but can I give them the mesh and the rendering?", 
        "I CAN! OffscreenCanvas for the win!", 
        "But Three.js's OrbitControls don't work with OffscreenCanvas? But the beautiful people at Three.js have already released an official proxy workaround. What amazing humans.",
        "A few more tweaks, a few more refactors.", "IT'S WORKING! IT'S WORKING!!!"
    ],
},
]

export function getEntryById(id) {
  return devlogEntries.find((e) => e.id === id)
}

export function getEntriesByProject(slug) {
  return devlogEntries.filter((e) => e.projectSlug === slug)
}

export function getRecentEntries(n = 3) {
  return [...devlogEntries]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, n)
}

export function getProjectsWithEntries() {
  const slugs = new Set(devlogEntries.map((e) => e.projectSlug))
  const projects = []
  devlogEntries.forEach((e) => {
    if (slugs.has(e.projectSlug)) {
      slugs.delete(e.projectSlug)
      projects.push({ slug: e.projectSlug, name: e.projectName })
    }
  })
  return projects
}

/*
Entry Format:
{
    id: '',
    title: "",
    date: '',
    projectSlug: '',
    projectName: '',
    preview: "",
    body: []
},

*/