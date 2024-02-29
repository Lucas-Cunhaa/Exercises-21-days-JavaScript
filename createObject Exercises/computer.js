class computer{

  Type 
  Processor 
  Video 
  Storage 
  Ram 
  SSD 

  constructor(type,processor,video,storage,ram,ssd){

        this.Type = type
        this.Processor = processor
        this.Video = video
        this.Storage = storage 
        this.Ram = ram
        this.SSD = ssd

  }
  showComputer(){
    console.log(Computer);
  }
}
let type = prompt('Desktop or Notebook');
let processor = prompt('Name of your processor');
let video = prompt('Dedicated or Integrated');
let storage = prompt('Storage');
let ram = prompt('Ram Memory');
let ssd = Boolean(prompt('0 for False / 1  for True'));

let Computer = new computer(type, processor, video, storage, ram,`Contains SSD ${ssd}`);
console.log(Computer.showComputer());