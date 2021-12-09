import SVG from '../../files/svg'

const Account = ({
  modal,
  setModal,
  message,
  setMessage,
  loading,
  setLoading
  }) => {
  
  return (
    <>
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => setModal('profile')}>
          <SVG svg={'user'}></SVG>
          <span>Profile</span>
        </div>
        <div className="account-dashboard-item" onClick={() => setModal('change_password')}>
          <SVG svg={'password'}></SVG>
          <span>Change Password</span>
        </div>
        <div className="account-dashboard-item" onClick={() => setModal('change_email')}>
          <SVG svg={'email'}></SVG>
          <span>Change Email</span>
        </div>
      </div>
      {modal == 'profile' &&
        <div className="accountUpdateProfile-modal">
          <div className="accountUpdateProfile-modal-box">
            <div className="accountUpdateProfile-modal-box-header">
              <div className="accountUpdateProfile-modal-form-title">Update Profile</div>
              <div onClick={() => (setModal(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            </div>
            <form action="" className="accountUpdateProfile-modal-box-form" onSubmit={(e) => updateProfile(e)}>
              <div className="form-group-single">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={account.username} onChange={(e) => createAdministrator('username', e.target.value)} required/>
              </div>
              <div className="form-group-single">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" value={account.firstName} onChange={(e) => createAdministrator('firstName', e.target.value)} required/>
              </div>
              <div className="form-group-single">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" value={account.lastName} onChange={(e) => createAdministrator('lastName', e.target.value)} required/>
              </div>
              <button type="submit" className="submit-item">{!loading && <span>Save</span>} {loading == 'profile' && <div className="loading"><span></span><span></span><span></span></div>}</button>
              {message && <span className="form-group-message">{message}</span>}
            </form>
          </div>
        </div>
      }
      {/* {modal == 'change_password' &&
        <div className="accountUpdateProfile-modal">
          <div className="accountUpdateProfile-modal-box">
            <div className="accountUpdateProfile-modal-box-header">
              <div className="accountUpdateProfile-modal-form-title">Change Password</div>
              <div onClick={() => (setModal(''), setError(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            </div>
            <form action="" className="accountUpdateProfile-modal-box-form" onSubmit={(e) => sendResetPasswordLink(e)}>
              <div className="form-group-single">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={administrator.email} onChange={(e) => createAdministrator('email', e.target.value)} readOnly required/>
              </div>
              <button type="submit" className="submit-item">{!loading && <span>Change Password</span>} {loading && <div className="loading"><span></span><span></span><span></span></div>}</button>
              {error && <span className="form-errorMessage">{error}</span>}
              {message && <span className="form-successMessage">{message}</span>}
            </form>
          </div>
        </div>
      }
      {modal == 'change_email' &&
        <div className="accountUpdateProfile-modal">
          <div className="accountUpdateProfile-modal-box">
            <div className="accountUpdateProfile-modal-box-header">
              <div className="accountUpdateProfile-modal-form-title">Change Password</div>
              <div onClick={() => (setModal(''), setError(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            </div>
            <form action="" className="accountUpdateProfile-modal-box-form" onSubmit={(e) => sendChangeEmailConfirmation(e)}>
              <div className="form-group-single">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={administrator.email} readOnly required/>
              </div>
              <div className="form-group-single">
                <label htmlFor="email">New Email</label>
                <input type="email" name="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required/>
              </div>
              <button type="submit" className="submit-item">{!loading && <span>Save</span>} {loading && <div className="loading"><span></span><span></span><span></span></div>}</button>
              {error && <span className="form-errorMessage">{error}</span>}
              {message && <span className="form-successMessage">{message}</span>}
            </form>
          </div>
        </div>
      } */}
    </>
  )
}

export default Account
