/**
 * Renders a welcome section that displays its child components.
 * 
 * @param {object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child elements to be rendered within the welcome section.
 * @returns {JSX.Element} A div containing the child elements passed to the component.
 */

export function Welcom(props) {
  return (
    <div className="preview-section">
        {props.children}
     
    </div>
  );
}
