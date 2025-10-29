import type React from 'react';
import { Loader2 as LucideLoader } from 'lucide-react';

const FullLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-700 z-9999">
      <LucideLoader
        width={42}
        height={42}
        className="animate-spin text-white"
      />
    </div>
  );
};

export default FullLoader;
