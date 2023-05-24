class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

let myVideo = new Video('Cool animals', 'Uliana', '12.12')
myVideo.watch()

let secondVideo = new Video('Happy baby', 'Sasha', '10.10')

let arr = [['name1', 'user1', '10.01'],['name2', 'user2', '10.01'],['name3', 'user3', '10.01'],['name4', 'user4', '10.01'],['name5', 'user5', '10.01']]

function createVideo(arr){
    let arrOfObj = []
    for(let i of arr){
        arrOfObj.push(new Video(i[0], i[1], i[2]))
    }
return arrOfObj
}

console.log(createVideo(arr));