/**
 * Renders the update note form, allowing users to modify the title and content of a selected note.
 * 
 * @param {object} props - The properties passed to the component.
 * @param {string} props.updatedTitle - The current title of the note being updated.
 * @param {function} props.setUpdatedTitle - Function to update the title state.
 * @param {string} props.updatedContent - The current content of the note being updated.
 * @param {function} props.setUpdatedContent - Function to update the content state.
 * @param {string|number} props.selectedNote - The ID of the note currently selected for updating.
 * @param {function} props.setSelectedNote - Function to reset the selected note state.
 * @param {boolean} props.showingMessage - Indicates whether to show validation messages.
 * @param {function} props.setShowingMessage - Function to show or hide validation messages.
 * @param {Array} props.errorMessages - An array of validation error messages.
 * @param {function} props.setErrorMessages - Function to set validation error messages.
 * @param {function} props.setPreviewContent - Function to set the preview content after saving.
 * @param {Array} props.notes - The current list of notes being managed.
 * @returns {JSX.Element} A form for updating a note, including inputs for title and content, 
 * and a button to save the changes.
 */

import { updateNoteHandler } from "../../Logic";

export function UpdateNote(props) {
  const {
    updatedTitle,
    setUpdatedTitle,
    updatedContent,
    setUpdatedContent,
    selectedNote,
    setSelectedNote,
    showingMessage,
    setShowingMessage,
    errorMessages,
    setErrorMessages,
    setPreviewContent,
    notes,
  } = props;

  return (
    <div className="preview-section">
      <div>
        <input
          type="text"
          name="title"
          className="form-input mb-30"
          placeholder="العنوان"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />

        <textarea
          rows="10"
          name="content"
          className="form-input"
          placeholder="النص"
          onChange={(e) => setUpdatedContent(e.target.value)}
          value={updatedContent}
        />

        <button
          className="button green"
          onClick={() =>
            updateNoteHandler(
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
            )
          }
        >
          حفظ
        </button>
        {showingMessage && (
          <div className="alert-container">
            {errorMessages.map((item, index) => (
              <ul key={index}>{item}</ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
