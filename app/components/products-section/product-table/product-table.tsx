import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getLocaleDict } from '@/app/i18n-service';

export default async function ProductTable() {
  const { dict } = await getLocaleDict();
  const rows = dict.product_section.product_table as { english: string; translation: string }[];
  return (
    <TableContainer
      component={Paper}
      sx={{
        minWidth: 320,
        maxWidth: '100vw',
        overflowX: 'auto', // прокрутка при узком экране
        fontSize: 'clamp(12px, 1.5vw, 18px)',
      }}
    >
      <Table
        size="small"
        sx={{
          minWidth: 700, // чтобы таблица не сжималась меньше
          fontSize: 'clamp(12px, 1.5vw, 18px)',
        }}
        aria-label="explosives table"
      >
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontSize: 'clamp(12px, 1.5vw, 18px)' }}>{row.english}</TableCell>
              <TableCell sx={{ fontSize: 'clamp(12px, 1.5vw, 18px)' }}>{row.translation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
