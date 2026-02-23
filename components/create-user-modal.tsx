import { useEffect } from "react";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    password?: string;
    role: string;
    xpTotal?: number;
    coins?: number;
    unlockAll?: boolean;
    currentStage?: number;
    currentChapter?: number;
  };
  setFormData: (data: any) => void;
  handleCreateUser: () => void;
  isEditing?: boolean;
  isLoading?: boolean;
}

export default function CreateUserModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  handleCreateUser,
  isEditing = false,
  isLoading = false,
}: CreateUserModalProps) {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const inputBase =
    "w-full bg-white/50 dark:bg-[#030712]/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600 focus:border-sky-500 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] outline-none transition-all duration-300 rounded-xl h-12 px-4 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg mx-4 bg-white/80 dark:bg-[#050b14]/90 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl dark:shadow-[0_0_40px_rgba(56,189,248,0.15)] rounded-2xl animate-in zoom-in-95 fade-in duration-300">

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            {isEditing ? "Modify Identity" : "Initialize Identity"}
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mt-1">
            System Access Configuration
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6 flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Full Name / Alias
            </label>
            <input
              type="text"
              placeholder="Enter designation"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={inputBase}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Comm Link (Email)
            </label>
            <input
              type="email"
              placeholder="sys.user@domain.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={inputBase}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Initial Passkey
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`${inputBase} tracking-[0.2em]`}
            />
          </div>

          {/* Role Selection */}
          <div className="flex flex-col gap-2 mt-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
              Clearance Level
            </label>

            <div className="flex gap-2">
              {["learner", "tester", "admin"].map((role) => {
                const isSelected = formData.role === role;

                let activeStyles = "";
                if (role === "admin") {
                  activeStyles =
                    "bg-rose-500/10 border-rose-500/50 text-rose-600 dark:text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]";
                } else if (role === "tester") {
                  activeStyles =
                    "bg-amber-500/10 border-amber-500/50 text-amber-600 dark:text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]";
                } else {
                  activeStyles =
                    "bg-sky-500/10 border-sky-500/50 text-sky-600 dark:text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]";
                }

                const inactiveStyles =
                  "bg-slate-100/50 dark:bg-slate-800/30 border-slate-200/80 dark:border-slate-700/50 text-slate-500 hover:border-slate-300 dark:hover:border-slate-600";

                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, role })
                    }
                    className={`flex-1 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ease-out ${isSelected ? activeStyles : inactiveStyles
                      }`}
                  >
                    {role}
                  </button>
                );
              })}
            </div>
          </div>

          {/* XP & Coins */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                XP Allocation
              </label>
              <input
                type="number"
                placeholder="0"
                value={formData.xpTotal || ''}
                onChange={(e) => setFormData({ ...formData, xpTotal: parseInt(e.target.value) || 0 })}
                className={inputBase}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Credits (Coins)
              </label>
              <input
                type="number"
                placeholder="0"
                value={formData.coins || ''}
                onChange={(e) => setFormData({ ...formData, coins: parseInt(e.target.value) || 0 })}
                className={inputBase}
              />
            </div>
          </div>

          {/* Progression Override */}
          <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Progression Override
              </span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.unlockAll || false}
                  onChange={(e) => setFormData({ ...formData, unlockAll: e.target.checked })}
                  className="w-4 h-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500 bg-white dark:bg-slate-800"
                />
                <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Unlock All (God Mode)</span>
              </label>
            </div>

            {!formData.unlockAll && (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Stage</label>
                  <input
                    type="number"
                    placeholder="1"
                    value={formData.currentStage || ''}
                    onChange={(e) => setFormData({ ...formData, currentStage: parseInt(e.target.value) || 1 })}
                    className={inputBase + " h-10"}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Chapter</label>
                  <input
                    type="number"
                    placeholder="1"
                    value={formData.currentChapter || ''}
                    onChange={(e) => setFormData({ ...formData, currentChapter: parseInt(e.target.value) || 1 })}
                    className={inputBase + " h-10"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Abort
          </button>

          <button
            onClick={handleCreateUser}
            disabled={isLoading}
            className={`px-6 py-2 rounded-xl text-sm font-bold bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:bg-sky-400 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300 flex items-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
            {isLoading ? "Processing..." : (isEditing ? "Save Changes" : "Execute Creation")}
          </button>
        </div>
      </div>
    </div>
  );
}
