import {filterTable} from '../helpers/tables'

const Table = ({
  title,
  adminUsers
}) => {
  console.log(adminUsers)
  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header-title">{title}</div>
      </div>
      <div className="table-headers">
        <div className="table-headers-item">&nbsp;</div>
        { 
          filterTable(adminUsers).length > 0 && filterTable(adminUsers, ['_id', 'createdAt', 'updatedAt', '__v'], 1).map((item, idx, array) => 
            Object.keys(array[0]).map((key, idx) => 
              <div key={idx} className="table-headers-item">{key}</div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Table
