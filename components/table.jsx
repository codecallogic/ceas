
const Table = ({
  title
}) => {
  
  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header-title">{title}</div>
      </div>
      <div className="table-headers">
        <div className="table-headers-item">&nbsp;</div>
        <div className="table-headers-item">First Name</div>
        <div className="table-headers-item">Last Name</div>
        <div className="table-headers-item">Username</div>
        <div className="table-headers-item">Role</div>
        <div className="table-headers-item">This is a long header</div>
        <div className="table-headers-item">This a new header</div>
        <div className="table-headers-item">This another header</div>
        <div className="table-headers-item">This another header</div>
        <div className="table-headers-item">This another header</div>
        <div className="table-headers-item">This another header This another header This another header This another header This another header</div>
      </div>
    </div>
  )
}

export default Table
