Name: Roberto Cruz

COMP4270.201 Final Project - Shape Editor

    Click the "Help" button for more details on how to use the editor. 

    This project was done with the fabric.js API, which included built in properties for shapes such as the selection tool.
Once selected, translation, scaling, and rotation could all be done in the canvas. All the lines, curves, shapes, and
text objects were derived from the API, where classes were included in Fabric for each. For example, to initialize
a line, the code "var line = new fabric.Line(...)" would be used to initialize a line of certain properties, being
its initial x and y coordinates. When setting border size, the property strokeWidth() could be set via the user's input.
The API also allowed for an implementation of loading PNGs to the canvas, but the tool restricts it to PNGs only, and the
object will have a fixed width and height, resulting in some unwanted cropping if the image exceeds these parameters. To
elaborate on the failed implementation of the copy and paste functions, I could not figure out how to successfully read
a combined user input from the the keyboard (holding down control key and C at the same time for example). When I resorted
to using buttons, I figured it would be more efficient to use one button for duplication, which resulted in the "Clone" tool.
    The features shown in the Shape Editor that are not strictly from the Fabric API are the Color Slider, the New, Delete, Undo,
and Clone tools. One feature that I believe does not work is the "Save as JSON" function, as the text that shows when you open said 
file will result in a formatting that possibly represents an encoded image file. Additionally, there is a small bug when clicking around 
the load image tool: if you click on the same horizontal line that said function is built upon, it will lead you to your files to select 
an image, even if the action was unintended. One feature that is not implemented is "Save," as I believed it was unneeded since there is
a "save as image" option and the canvas will be left as is unless the user refereshes the site or presses the 
new option.

In summary:

Implemented (mandatory)
Line, triangle, square, rectangle, circle, ellipse, curve, polyline, polygon support
New to clear and start new diagram
Shape selection, translation, scaling, and rotation
Unlimited Undo (Undo button only, no Control-Z)
Clone (to replace Copy and Paste)
Save as Image (JPEG)
Supports multiple thickness and color

Implemented (extra credit)
Text
Border Size
Load Image
Help button

Failed to Implement
Save
Load from JSON


 
