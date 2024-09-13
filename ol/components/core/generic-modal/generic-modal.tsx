type GenericModalProps = {
  isOpen: boolean;
  handleClose: CallableFunction;
};

export function GenericModal() {
  return (
    <div className="overlay">
      <div className="container">
        <div className="content"></div>
      </div>
    </div>
  );
}
