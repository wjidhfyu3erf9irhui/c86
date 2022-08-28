var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabtoc.Image.fromURL*'BirthdayImage.jpg', function(Img) {
        block_image_object = Img;

        block_image_object.scaletoWidth(700);
        block_image_object.scaletoHeight(150);
        block_image_object.set({
            top:0,
            left:0
        })
        canvas.add(block_image_object);
    }
	
};

function playSound(){
	x.play();
}
