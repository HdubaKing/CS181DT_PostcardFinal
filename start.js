function createPostcard(postcardData) {
  /*
  Creates a new postcard entry.

  will be called when a user places down a pin.

  params:
    - postcardData (Object): 
        {
          location: { latitude: Number, longitude: Number },
          photoUrl: String,
          date: String,
          placeDescription: String,
          stickerId: String,
          writeup: String
        }

  return:
   The created postcard object with a unique postcardId.
  */
}

function uploadPhoto(file) {
  /*
  Uploads a photo to the postcard and returns its URL.

  will be called when a user uploads a photo that will be used on the postcard they are creating.

  params:
    - file (File): The photo file to be uploaded.

  return:
   URL of the uploaded photo.

  */
}

function getPostcardById(postcardId) {
  /*
  Retrieves a specific postcard from the database using its ID.

  will be called when a user wants to view a specific postcard.

  params:
    - postcardId (String): The unique identifier of the postcard.

  return:
    - Promise<Object>: The postcard object corresponding to the given ID.

  FSM transition: "view postcard"
  */
}

function deletePostcard(postcardId) {
  /*
  Deletes a specific postcard.

  will be called when a user decides they want to delete a postcard they created.

  params:
    - postcardId (String): The unique identifier of the postcard to delete.

  return:
    - Promise<Boolean>: Returns true if deletion was successful, false otherwise.

  FSM transition: "delete postcard"
  */
}

function updatePostcard(postcardId, updateData) {
  /*
  Updates the details of an existing postcard one has created.

  will be called when a user edits their postcard information.

  params:
    - postcardId (String): The unique identifier of the postcard to update.
    - updateData (Object): An object containing the fields to be updated.
        {
          photoUrl?: String,
          date?: String,
          placeDescription?: String,
          stickerId?: String,
          writeup?: String
        }

  return:
    - Promise<Object>: The updated postcard object.

  FSM transition: "update postcard"
  */
}

function placePin(latitude, longitude) {
  /*
  Adds a new pin once a user places one in an area that does not have one.

  will be called when a user drops a pin on the map.

  params:
    - latitude (Number): The latitude coordinate of the pin.
    - longitude (Number): The longitude coordinate of the pin.

  return:
    - Promise<Object>: The created pin object with a unique pinId.

  FSM transition: "place pin"
  */
}

function viewPostcard(pinId) {
  /*
  Retrieves the postcard associated with the specified pin.

  will be called when a user clicks on a pin to view its details.

  params: 
    - pinId (String): The unique identifier of the pin.

  return: 
    - postcard (Object): The postcard data including photo URL, description, sticker ID, and writeup.

  FSM state: displaying postcard details
  */
  
  // Implementation here
}



