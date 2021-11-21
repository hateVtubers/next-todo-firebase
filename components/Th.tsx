import { ReactNode } from "react"

export const Th = ({ className, children }: { className: string, children: ReactNode }) => {
  return (
    <th className={className}>
      {children}
    </th>
  )
}
