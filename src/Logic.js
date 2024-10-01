/**
 * Retrieves the initial list of notes from localStorage or initializes it if not present.
 *
 * @returns {Array} The list of notes stored in localStorage. Returns an empty array if no notes exist.
 */
export function initialNote() {
  if (localStorage.getItem("mynotes")) {
    return JSON.parse(localStorage.getItem("mynotes"));
  } else {
    localStorage.setItem("mynotes", JSON.stringify([]));
    return [];
  }
}

/**
 * Adds a new note to the list of existing notes and stores the updated list in localStorage.
 *
 * @param {string} title - The title of the new note.
 * @param {string} content - The content of the new note.
 * @param {Array} notes - The current list of notes to which the new note will be added.
 */
export function addNote(title, content, notes) {
  const note = {
    id: new Date(),
    title: title,
    content: content,
  };
  const updatedNotes = [...notes, note];
  localStorage.setItem("mynotes", JSON.stringify(updatedNotes));
}

/**
 * Validates the title and content of a note, checking for empty values.
 *
 * @param {string} title - The title of the note to validate.
 * @param {string} content - The content of the note to validate.
 * @returns {Array} An array of validation error messages. Returns an empty array if no validation errors are found.
 */
export function validator(title, content) {
  let emptyTitle = " العنوان لايمكن ان يكون فارغا";
  let emptyContent = " النص لايمكن ان يكون فارغا";
  let messagesTitle = [];
  let messageContent = [];
  let message = [];

  switch (title) {
    case "":
      messagesTitle.push(emptyTitle);
      break;

    default:
      messagesTitle = [];
      break;
  }
  switch (content) {
    case "":
      messageContent.push(emptyContent);
      break;

    default:
      messageContent = [];
      break;
  }
  return (message = [...messagesTitle, ...messageContent]);
}

/**
 * Handles the saving of a new note after validating the input fields. If validation fails,
 * it displays error messages; otherwise, it saves the note and resets input fields.
 *
 * @param {string} title - The title of the note to be saved.
 * @param {string} content - The content of the note to be saved.
 * @param {function} setShowingMessage - Function to show or hide the validation message.
 * @param {function} setErrorMessages - Function to set error messages for invalid inputs.
 * @param {function} setTitle - Function to reset the title input field after saving the note.
 * @param {function} setContent - Function to reset the content input field after saving the note.
 * @param {function} setPreviewContent - Function to set the preview content after saving the note.
 * @param {Array} notes - The current list of notes to which the new note will be added.
 */
export function saveNoteHandler(
  title,
  content,
  setShowingMessage,
  setErrorMessages,
  setTitle,
  setContent,
  setPreviewContent,
  notes
) {
  if (validator(title, content).length != 0) {
    setShowingMessage(true);
    setErrorMessages(validator(title, content));
    setTimeout(() => {
      setShowingMessage(false);
    }, 2000);
    return;
  } else {
    addNote(title, content, notes);
    setTitle("");
    setContent("");
    setPreviewContent("welcom");
  }
}

/**
 * Handles the update of an existing note after validating the updated title and content.
 * If validation fails, it displays error messages; otherwise, it updates the note and resets input fields.
 *
 * @param {string} updatedTitle - The updated title of the note.
 * @param {string} updatedContent - The updated content of the note.
 * @param {object} selectedNote - The note object to be updated.
 * @param {function} setSelectedNote - Function to reset the selected note after updating.
 * @param {function} setShowingMessage - Function to show or hide the validation message.
 * @param {function} setErrorMessages - Function to set error messages for invalid inputs.
 * @param {function} setUpdatedTitle - Function to reset the title input field after updating the note.
 * @param {function} setUpdatedContent - Function to reset the content input field after updating the note.
 * @param {function} setPreviewContent - Function to set the preview content after updating the note.
 * @param {Array} notes - The current list of notes in which the selected note will be updated.
 */
export function updateNoteHandler(
  updatedTitle,
  updatedContent,
  selectedNote,
  setSelectedNote,
  setShowingMessage,
  setErrorMessages,
  setUpdatedTitle,
  setUpdatedContent,
  setPreviewContent,
  notes
) {
  if (validator(updatedTitle, updatedContent).length != 0) {
    setShowingMessage(true);
    setErrorMessages(validator(updatedTitle, updatedContent));
    setTimeout(() => {
      setShowingMessage(false);
    }, 2000);
    return;
  } else {
    notes.map((item) => {
      if (item.id === selectedNote) {
        item.title = updatedTitle;
        item.content = updatedContent;
      }
    });
    localStorage.setItem("mynotes", JSON.stringify(notes));

    setUpdatedTitle("");
    setUpdatedContent("");
    setPreviewContent("welcom");
    setSelectedNote(null);
  }
}

/**
 * Retrieves the selected note from the list of notes based on the provided note id.
 *
 * @param {string} selectedNote - The id of the note to be retrieved.
 * @param {Array} notes - The current list of notes from which to find the selected note.
 * @returns {object|null} The selected note object if found; otherwise, returns null.
 */
export function getNoteSelected(selectedNote, notes) {
  return notes.find((note) => note.id === selectedNote);
}

/**
 * Shortens a given title to a specified character limit, appending "..." if truncated.
 *
 * @param {string} text - The title to be shortened.
 * @param {number} [limit=35] - The maximum number of characters allowed in the shortened title.
 * @returns {string} The shortened title if it exceeds the limit; otherwise, returns the original title.
 */
export function shortenTitle(text, limit = 35) {
  const characters = Array.from(text); // Converts the string into an array of characters
  if (characters.length > limit) {
    return characters.slice(0, limit).join("") + "..."; // Rejoin the characters
  } else {
    return text;
  }
}
