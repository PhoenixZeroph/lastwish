import { Dialog } from "@headlessui/react";

export default function QRModal({ data, onClose }: { data: string; onClose: () => void }) {
  return (
    <Dialog open onClose={onClose} className="fixed inset-0 flex items-center justify-center">
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="bg-white p-8 rounded-xl z-10">
        <img src={data} alt="QR Code" className="w-64 h-64" />
      </div>
    </Dialog>
  );
}
