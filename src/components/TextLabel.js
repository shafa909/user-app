import './textLabel.css'

function TextLabel({label,value}) {
  return (
    <div className="text-with-label">
      <p className="text-label">{label}</p>
      <p className="text-value">{value? value :''}</p>
    </div>
  );
}

export default TextLabel;
