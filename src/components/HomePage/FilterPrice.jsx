import { useForm } from 'react-hook-form'
import './styles/Filters.css'
import { useState } from 'react';

const FilterPrice = ({setFromTo}) => {

  const {register, reset, handleSubmit} = useForm()
  const [showFilter, setShowFilter] = useState(false)

  const submit = data => {
    const from = Number(data.from.trim())
    const to = +data.to.trim()
    const obj = {
      from: from || 0,
      to: to || Infinity
    }
    setFromTo(obj)
  }

  const handleShowFilter = () =>{
    setShowFilter(!showFilter)
  }

  return (
    <article className="filters">
      <div className='filter-drop-down'>
      {/* <div className={showFilter ? 'filter-drop-down closed' : 'filter-drop-down'} onClick={handleShowFilter}> */}
        <div className='header'>
          <h3>Price</h3><i className='bx bx-chevron-down'></i>
        </div>
        <div className="content">
          <form className="form__price" onSubmit={handleSubmit(submit)}>
            <div className="form__price__row">
              <label htmlFor="from">From</label>
              <input {...register('from')} type="number" id="from" />
            </div>
            <div className="form__price__row">
              <label htmlFor="to">To</label>
              <input {...register('to')} type="number" id="to" />
            </div>
            <button>Filter Price</button>
          </form>
        </div>
      </div>
    </article>
  )
}

export default FilterPrice