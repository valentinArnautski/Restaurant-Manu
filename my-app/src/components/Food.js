import { Box, Button } from '@mui/material'
import {foodSections} from '../components/mockData'

 const Food = () => {

    return (
        <Box>
        {Object.entries(foodSections).map(([key, value]) => (
          <Button key={key} variant="contained">
            {value}
          </Button>
        ))}
      </Box>
        )
}

export default Food