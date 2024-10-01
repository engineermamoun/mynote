/**
 * Renders a form for creating a new note, including inputs for title and content.
 * It handles the submission of the new note and displays validation messages if any errors occur.
 *
 * @param {object} props - The properties passed to the component.
 * @param {boolean} props.showingMessage - Indicates whether to show validation messages.
 * @param {Array} props.errorMessages - An array of validation error messages.
 * @param {function} props.setShowingMessage - Function to show or hide validation messages.
 * @param {function} props.setErrorMessages - Function to set validation error messages.
 * @param {function} props.setPreviewContent - Function to set the preview content after saving the note.
 * @param {Array} props.notes - The current list of notes to which the new note will be added.
 * @returns {JSX.Element} A form for adding a new note, including inputs for title and content,
 * and a button to save the note.
 */
import { useState } from "react";
import { saveNoteHandler } from "../../Logic";

export function NewNote(props) {
  const {
    showingMessage,
    errorMessages,
    setShowingMessage,
    setErrorMessages,
    setPreviewContent,
    notes,
  } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="preview-section">
      <h3>اضف عنصر جديد </h3>
      <div>
        <div>
          <input
            type="text"
            name="title"
            className="form-input mb-30"
            placeholder="العنوان"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows="10"
            name="content"
            className="form-input"
            placeholder="النص"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />

          <button
            className="button green"
            onClick={() =>
              saveNoteHandler(
                title,
                content,
                setShowingMessage,
                setErrorMessages,
                setTitle,
                setContent,
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
    </div>
  );
}
