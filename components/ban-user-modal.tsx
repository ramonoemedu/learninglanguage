'use client'

import BaseModal from "./base-modal"


interface BanUserModalProps {
  isOpen: boolean
  onClose: () => void
  selectedUser: {
    name?: string
    banned?: boolean
  } | null
  handleToggleBan: () => void
  isLoading?: boolean
}

export function BanUserModal({
  isOpen,
  onClose,
  selectedUser,
  handleToggleBan,
  isLoading = false,
}: BanUserModalProps) {

  const isBanned = selectedUser?.banned

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>

      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
        <h2 className="uppercase tracking-tighter font-bold text-slate-900 dark:text-white">
          {isBanned ? "Unlock Identity" : "Lock Identity"}
        </h2>
      </div>

      {/* Body */}
      <div className="px-6 py-6">
        <p className="text-sm text-slate-500">
          Are you sure you want to {isBanned ? "unlock" : "lock"}{" "}
          <strong>{selectedUser?.name}</strong>?
          {!isBanned && " They will lose access immediately."}
        </p>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          Cancel
        </button>

        <button
          onClick={handleToggleBan}
          disabled={isLoading}
          className={`px-5 py-2 rounded-xl text-sm font-bold text-white transition-all flex items-center gap-2
            ${isBanned
              ? "bg-emerald-500 hover:bg-emerald-400"
              : "bg-rose-500 hover:bg-rose-400"
            } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
          {isLoading ? "Processing..." : (isBanned ? "Unlock User" : "Lock User")}
        </button>
      </div>
    </BaseModal>
  )
}