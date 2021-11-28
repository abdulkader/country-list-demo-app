import PropTypes from 'prop-types';
import {
  Inject,
  Page,
  Sort,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
} from '@syncfusion/ej2-react-grids';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-grids/styles/material.css';

const DataTable = ({
  pageSettings,
  data,
  sortSettings,
  allowSorting,
  allowPaging,
  children,
  id,
  className,
}) => {
  return (
    <div id={id} className={className}>
      <GridComponent
        dataSource={data}
        allowPaging={allowPaging}
        pageSettings={pageSettings}
        allowSorting={allowSorting}
        sortSettings={sortSettings}
      >
        <ColumnsDirective>{children}</ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </div>
  );
};

DataTable.defaultProps = {
  id: '',
  className: '',
  allowSorting: true,
  allowPaging: true,
  sortSettings: {
    pageSize: 20,
  },
  pageSettings: {
    columns: [{ field: 'cca2', direction: 'Ascending' }],
  },
};

DataTable.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  sortSettings: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string,
        direction: PropTypes.oneOf(['Ascending', 'Descending']),
      })
    ),
  }),
  pageSettings: PropTypes.shape({
    pageSize: PropTypes.number,
  }),
  allowSorting: PropTypes.bool,
  allowPaging: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default DataTable;
