/* eslint-disable new-cap */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import { columns, headerColumns } from 'renderer/constants';
import { getExportFileExcel } from 'renderer/utils';

export function getExportFilePDF(
  columns: string[],
  data: any[],
  fileName: string
) {
  const headerNames = columns;
  const doc = new jsPDF();
  // const compatibleData = data;
  const result = data?.map(Object.values);
  doc.autoTable({
    head: [headerNames],
    body: result,
    margin: { top: 20 },
    styles: {
      minCellHeight: 9,
      halign: 'left',
      valign: 'center',
      fontSize: 11,
    },
  });

  doc.save(`${fileName}.pdf`);

  return false;
}
const Utilities = ({ entriesList }) => {
  return (
    <div className="utilityContent">
      {entriesList.length > 0 && (
        <button
          className="button btn-yellow"
          onClick={() => {
            getExportFileExcel(
              headerColumns,
              columns,
              entriesList,
              'timesheetexcel'
            );
          }}
        >
          Export Excel
        </button>
      )}
      {entriesList.length > 0 && (
        <button
          className="button btn-yellow "
          onClick={() => {
            getExportFilePDF(headerColumns, entriesList, 'timesheetpdf');
          }}
        >
          Export Pdf
        </button>
      )}
    </div>
  );
};

export default Utilities;
