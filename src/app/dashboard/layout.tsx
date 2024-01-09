import NavBar from "@/components/dashboard/NavBar"
import SideBar from "@/components/dashboard/sidebar/SideBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex p-6 ">
      <div className="flex-1 p-[20px] relativo rounded-md bg-[#272c33]">
        <SideBar></SideBar>
      </div>
      <div className="flex-[4] px-[20px]">
        <NavBar></NavBar>
        {children}
      </div>
    </div>
  )
}