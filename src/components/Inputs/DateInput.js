import React from 'react'

export const DateInput = ({ value, setValue, inputTitle, inputName }) => {

    const handleDeleteInputField = () => {
        setValue('');
    }

    return (
        <div className="col-md-6 col-sm-12 col-lg-3">
            <label for="date_init" className="col-form-label">{inputTitle}</label>
            <div id="w0-kvdate" className="input-group">
                <span className="input-group-addon" title="Limpiar campo" onClick={handleDeleteInputField}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
                <input
                    type="date" data-testid="datePicker" id="w0" className="form-control krajee-datepicker" name={inputName}
                    data-datepicker-source="w0-kvdate" data-datepicker-type="2" data-krajee-kvdatepicker="kvDatepicker_9d81294f"
                    value={value} onChange={(e) => { setValue(e.target.value) }} 
                />
            </div>
        </div>
    )
}