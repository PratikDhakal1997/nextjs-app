import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Footer from "@/components/Footer";
import { Slider, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PaginatedTable from "@/components/PaginatedTable";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Getting Started
        </Typography>
        <h1>
          Read about Routing, very useful
          <br />
          <a href="https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts">
            HTML Link
          </a>
          <br />
          <Link
            href="https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts"
            color="secondary"
          >
            Link with Lib
          </Link>
        </h1>
        <p>
          {" "}
          Material UI, pretty useful for components for faster development. We
          can override it with our styles if we want. Read more {""}
          <Link
            href="https://mui.com/material-ui/all-components/"
            color="secondary"
          >
            here
          </Link>
        </p>
        <p>
          We can make ui really fast, have states etc processed in it. For
          example Slider:
        </p>
        <Slider aria-label="Temperature" defaultValue={30} color="secondary" />
        <p>We want table, we can simply do</p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <p> But maybe we want our table to be populated with API:</p>
        <PaginatedTable />
      </Box>
      <Footer />
    </Container>
  );
}
