class Video{
    constructor(title,uploader,time){
        this.title=title
        this.uploader=uploader
        this.time=time
    }
    /**
     * 
     */
    watch() {
        console.log(`${this.uploader} a regardé toute la vidéo de ${this.time} secondes intitulée ${this.title} !`)
    }
}
const videoData = [
  { title: "Learn JavaScript", uploader: "Ali", time: 300 },
  { title: "Python for Beginners", uploader: "Sara", time: 600 },
  { title: "FastAPI Tutorial", uploader: "John", time: 450 },
  { title: "HTML Basics", uploader: "Emma", time: 200 },
  { title: "CSS Grid vs Flexbox", uploader: "Leo", time: 350 }
];

let video1=new Video("title1","uploader1","time1")
let video2=new Video("title2","uploader2","time2")
video1.watch()
let tabObject = Object.entries(video1)
console.log(tabObject)
videoData.forEach(video => {
  const instance = new Video(video.title, video.uploader, video.time);
  instance.watch();
});
