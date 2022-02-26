import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { orderList } from '../../../utilities/dropdowns'

const NavMenuForm = ({
    accessToken,
    title,
    resetUI,
    setModal,
    setMessage,
    message,
    loading,
    setLoading,
    edit,
    setEdit, 

    // DATA
    allData,
    setAllData,
    
    // REDUX
    stateData,
    stateMethod,
    caseType,
    resetMethod,
    resetType,

    // CRUD
    submitCreate,
    submitUpdate
    
  }) => {

  const addItem = 'CREATE_NAV_MENU_ARRAY_ITEM'
  const myRefs = useRef(null)
  const [input_dropdown, setInputDropdown] = useState('')

  const handleClickOutside = (event) => {
    if(myRefs.current){
      if(!myRefs.current.contains(event.target)){
        setInputDropdown('')
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [])
    
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-box-header">
          <div 
          className="modal-box-svg" 
          onClick={() => (resetUI(), setModal(''), setMessage(''), setEdit(''), resetMethod(resetType))}
          >
            <SVG svg={'close'}></SVG>
          </div>
          <div className="modal-box-header-title">{title}</div>
        </div>
        <div className="modal-box-content">
          <div className="form-group">
            <input 
            id="name" 
            value={stateData.name} 
            onChange={(e) => stateMethod(caseType, 'name', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.name.length > 0 || 
              typeof stateData.name == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('navMenu_items')} 
            readOnly
            onChange={(e) => (setInputDropdown('navMenu_items'), stateMethod(caseType, 'items', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.items.length > 0 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="items">
              Items
            </label>
            <div 
            onClick={() => setInputDropdown('navMenu_items')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'navMenu_items' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData.navItems && allData.navItems.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(addItem, 'items', item), setInputDropdown(''))}>
                  {item.name} 
                <div className="form-group-list-item-svg">
                  { stateData.items.findIndex((found) => found._id == item._id) !== -1
                      ? 
                      <SVG svg={'checkmark'}></SVG>
                      :
                      ''
                  }
                </div>
                </div>
                ))}
              </div>
            }
          </div>
          {stateData.items && stateData.items.length > 0 &&
            <div className="form-group-tags">
              {stateData.items && stateData.items.map((item, idx) => 
                <div key={idx}>
                  {allData.navItems[allData.navItems.findIndex((index) => { return index._id == (typeof item == 'object' ? item._id : item)})].name}
                  <span onClick={(e) => stateMethod(addItem, 'items', item)}>X</span>
                </div>
              )}
            </div>
          }
          <div className="form-group">
            <input 
            id="link" 
            value={stateData.link} 
            onChange={(e) => stateMethod(caseType, 'link', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.link.length > 0 || 
              typeof stateData.link == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="link">
              Link
            </label>
          </div>
          <div className="form-group">
            <input
            value={stateData.order}
            onClick={() => setInputDropdown('navMenu_order')} 
            onChange={(e) => (setInputDropdown('navMenu_order'), stateMethod(caseType, 'order', e.target.value))}
            readOnly
            />
            <label 
            className={`input-label ` + (
              stateData.order.length > 0 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="order">
              Order
            </label>
            <div 
            onClick={() => setInputDropdown('navMenu_order')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'navMenu_order' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {orderList && orderList.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'order', item.number), setInputDropdown(''))}>
                  {item.number} 
                </div>
                ))}
              </div>
            }
          </div>
        </div>
        <div className="modal-box-footer">
          {!edit && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, 'create_nav_menu', 'navMenus', 'navigation/create-nav-menu', accessToken, allData, setAllData, resetMethod, resetType)}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_nav_menu' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_nav_menu' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_nav_menu', 'navMenus', 'navigation/update-nav-menu', accessToken, allData, setAllData, resetMethod, resetType, setModal)}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_nav_menu' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
        </div>
      </div>
    </div>
  )
}

export default NavMenuForm
