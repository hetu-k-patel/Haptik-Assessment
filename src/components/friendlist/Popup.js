import ReactDom from 'react-dom';

const Popup = ({ open, children, onClose }) => {
   if (!open) return null;

   return ReactDom.createPortal(
      <div className="popup-box">
         <div className="box">{children}</div>
      </div>,
      document.getElementById('portal')
   );
};

export default Popup;
