import { Box } from "@mui/system"

const BlankLayout = ({ children }: LayoutType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  )
}

export default BlankLayout
