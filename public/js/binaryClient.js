var client = new BinaryClient('ws://localhost:9000/binary-endpoint')
var video = document.createElement("video");
video.src = "blob:http%3A//localhost%3A3000/64441a65-c093-4490-80cf-ca71ba8e86b6"
document.body.appendChild(video);

var counter = 1;
var meta;

// client.on('stream', function(stream,meta){
//   var parts =  [];
//   stream.on('data',function(data){
//       parts.push(data);
//       console.log(counter);
//       meta = meta
//       counter++
//   });
//   stream.on('end',function(){
//     video.src = (window.URL||window.webkitURL).createObjectURL(new Blob(parts));
//     console.log(meta);
//     $('video')[0].play();
//     $('video')[0].controls=true;
//     console.log('end')
//   })
// })
