//  --------------------------------- Shows a Message Box for Errors  --------------------------------- \\

export default function MessageBox(props) {
  return (
    //   use if exist, props.children Show the content of the children box (in the {} of the HTML version)
    <div className={`alert alert-${props.variant || 'info'}`}> 
      {props.children}
    </div>
  );
}