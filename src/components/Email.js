import React from 'react'

function Email() {
  return (
    <div>
        <form action="">
            <select name="" id="" placeholder='Select Inquirer Type'>
                <option value="End User">End User</option>
                <option value="Installer">Installer</option>
                <option value="Distributor">Distributor</option>
            </select>
            <input type="text" placeholder='Enter company name' />
            <input type="text" placeholder='enter contact name' />
            <input type="number" placeholder='enter contact number' />
        </form>
    </div>
  )
}

export default Email