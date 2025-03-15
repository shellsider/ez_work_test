function Modal({ content, isLoading, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-[9999] flex items-center justify-center">
      <div className="bg-white p-6 rounded-md min-w-[300px] text-center shadow-lg">
        {isLoading ? (
          <div className="border-8 border-gray-200 border-t-8 border-t-blue-500 rounded-full w-12 h-12 mx-auto animate-spin"></div>
        ) : (
          <>
            <p className="mb-4">{content}</p>
            <button
              onClick={onClose}
              className="bg-[#ff7f0e] text-white px-4 py-2 rounded hover:bg-[#e66a00]">
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
