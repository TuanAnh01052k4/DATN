import { Slider } from 'antd';
import React, { useState } from 'react'

type Props = {}

const Sidebar_prod = (props: Props) => {
    const [sizeOptionsVisible, setSizeOptionsVisible] = useState(false);
  const [colorOptionsVisible, setColorOptionsVisible] = useState(false);
  const [priceOptionsVisible, setPriceOptionsVisible] = useState(false);
  const [highlightedSize, setHighlightedSize] = useState('');
  const [highlightedColors, setHighlightedColors] = useState([]);
  const [price, setPrice] = useState([0, 10000000]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleSizeOptions = () => setSizeOptionsVisible(!sizeOptionsVisible);
  const toggleColorOptions = () => setColorOptionsVisible(!colorOptionsVisible);
  const togglePriceOptions = () => setPriceOptionsVisible(!priceOptionsVisible);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleSizeClick = (size) => {
    setHighlightedSize(size);
  };

  const handleColorClick = (color) => {
    setHighlightedColors((prev) => {
      if (prev.includes(color)) {
        return prev.filter(c => c !== color);
      } else {
        return [...prev, color];
      }
    });
  };

  const handleReset = () => {
    setHighlightedSize('');
    setHighlightedColors([]);
    setPrice([0, 10000000]);
  };

  const handleApply = () => {
    // Implement your filter logic here
    alert('Filters applied!');
  };
  return (
    <>
        <div className="sidebar-prod sidebar-prod-pc hidden lg:block lg:w-[270px] lg:mr-[33px] lg:pl-[15px]">
            <div className="filter-by-side">
              <ul>
                <li className="flex justify-between">
                  <p className="text-[#221F20]">Size</p>
                  <p onClick={toggleSizeOptions}><i className={`fa-solid ${sizeOptionsVisible ? 'fa-minus' : 'fa-plus'} cursor-pointer`} /></p>
                </li>
                {sizeOptionsVisible && (
                  <li id="sizeOptions" className="mt-4">
                    <ul className="flex flex-wrap gap-3">
                      {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                        <li key={size}>
                          <button
                            className={`size-btn text-[12px] px-4 py-2 border rounded ${highlightedSize === size ? 'highlighted' : ''}`}
                            onClick={() => handleSizeClick(size)}
                            style={{ borderRadius: '10px 0px' }}
                          >
                            {size}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                <hr className="mt-[21px] mb-[15px] text-[#F7F8F9]" />
                <li className="flex justify-between mt-4">
                  <p className="text-[#221F20]">Màu sắc</p>
                  <p onClick={toggleColorOptions}><i className={`fa-solid ${colorOptionsVisible ? 'fa-minus' : 'fa-plus'} cursor-pointer`} /></p>
                </li>
                {colorOptionsVisible && (
                  <li id="colorOptions" className="mt-4">
                    <ul className="flex flex-wrap gap-2">
                      {['black', 'white', 'blue', 'yellow', 'pink', 'red', 'gray', 'brown', 'green', 'purple'].map(color => (
                        <li key={color}>
                          <button
                            className={`color-btn w-5 h-5 rounded-full relative ${highlightedColors.includes(color) ? 'highlighted' : ''}`}
                            onClick={() => handleColorClick(color)}
                            style={{ backgroundColor: color, borderColor: color === 'white' ? 'black' : 'transparent' }}
                          >
                            {highlightedColors.includes(color) && (
                              <i className={`fa-solid fa-check absolute inset-0 flex items-center justify-center ${color === 'white' ? 'text-black' : 'text-white'}`} />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                <hr className="mt-[21px] mb-[15px] text-[#F7F8F9]" />
                <li className="flex justify-between mt-4">
                  <p className="text-[#221F20]">Mức giá</p>
                  <p onClick={togglePriceOptions}><i className={`fa-solid ${priceOptionsVisible ? 'fa-minus' : 'fa-plus'} cursor-pointer`} /></p>
                </li>
                {priceOptionsVisible && (
                  <li id="priceOptions" className="mt-4">
                    <Slider
                      range
                      min={0}
                      max={10000000}
                      value={price}
                      onChange={(value) => setPrice(value)}
                      className="price-slider"
                      trackStyle={{ backgroundColor: '#000' }} // Track color
                      handleStyle={{ borderColor: '#000', backgroundColor: '#000' }} // Handle color
                    />
                    <div className="flex justify-between mt-2">
                      <span id="minPrice">{price[0]}đ</span>
                      <span id="maxPrice">{price[1]}đ</span>
                    </div>
                  </li>
                )}
                <hr className="mt-[21px] mb-[33px] text-[#F7F8F9]" />
                <li className="flex justify-around mt-4">
                  <button onClick={handleReset} className="px-2 py-2 border rounded bg-white text-black w-20" style={{ borderRadius: '17px 0px 17px 0px' }}>Bỏ Lọc</button>
                  <button onClick={handleApply} className="px-4 py-2 border rounded bg-black text-white w-20" style={{ borderRadius: '17px 0px 17px 0px' }}>Lọc</button>
                </li>
              </ul>
            </div>
          </div>
    </>
  )
}

export default Sidebar_prod