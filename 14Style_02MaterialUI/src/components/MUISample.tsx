import { Button, Box, Slider } from '@mui/material'

// npm install @mui/material @emotion/react @emotion/styled

export default function MUISample() {
  const handleClick = () => { alert('버튼 클릭됨!') };

  return (
    <>
      <div>
        <Button variant='text'>Text</Button>
        <Button variant='contained' onClick={handleClick}>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </div>
      <Box sx={{ width: 300 }}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </Box>

    </>
  )
}
