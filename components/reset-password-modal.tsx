'use client'

import { Lock } from "lucide-react"
import BaseModal from "./base-modal"

interface ResetPasswordModalProps {
  isOpen: boolean
  onClose: () => void
  selectedUser: any
  newPassword: string
  setNewPassword: (value: string) => void
  handleResetPassword: () => void
  isLoading?: boolean
}

export default function ResetPasswordModal({
  isOpen,
  onClose,
  selectedUser,
  newPassword,
  setNewPassword,
  handleResetPassword,
  isLoading = false,
}: ResetPasswordModalProps) {

  const inputBase = `
    w-full h-12 px-4 rounded-xl
    bg-white/50 dark:bg-[#050b14]/80
    border border-slate-200/80 dark:border-slate-800/80
    text-sm text-slate-900 dark:text-white
    placeholder:text-slate-400 dark:placeholder:text-slate-600
    focus:border-sky-500 focus:outline-none
    focus:shadow-sm dark:focus:shadow-[0_0_20px_rgba(56,189,248,0.15)]
    transition-all duration-300
  `

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>

      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
        <h2 className="uppercase tracking-tighter font-bold text-slate-900 dark:text-white">
          Reset Passkey
        </h2>
      </div>

      {/* Body */}
      <div className="px-6 py-6 space-y-4">
        <p className="text-sm text-slate-500">
          Enter a new password for <strong>{selectedUser?.name}</strong>.
        </p>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`${inputBase} pl-10`}
          />
        </div>
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
          onClick={handleResetPassword}
          disabled={isLoading}
          className={`px-5 py-2 rounded-xl text-sm font-bold bg-sky-500 text-white hover:bg-sky-400 transition-all flex items-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
          {isLoading ? "Updating..." : "Update Passkey"}
        </button>
      </div>

    </BaseModal>
  )
}