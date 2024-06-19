import React, { useEffect, useRef } from "react";

const TimeRoller = ({
  range,
  unit,
  selectedValue,
  setSelectedValue,
  selectedItemStyle,
  unselectedItemsStyle,
  rollerContainerStyle,
  unitStyle,
}) => {
  const ulRef = useRef(null);
  useEffect(() => {
    const ulElement = ulRef.current;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = ulElement;
      const scrolled = scrollTop / (scrollHeight - clientHeight);
      const index = Math.round(scrolled * (range.length - 1));
      setSelectedValue(range[index]);
    };

    ulElement.addEventListener("scroll", handleScroll);
    return () => {
      ulElement.removeEventListener("scroll", handleScroll);
    };
  }, [range, setSelectedValue]);

  useEffect(() => {
    const ulElement = ulRef.current;
    const index = range.indexOf(selectedValue);
    if (index !== -1) {
      const scrollTo =
        (index / (range.length - 1)) *
        (ulElement.scrollHeight - ulElement.clientHeight);
      ulElement.scrollTop = scrollTo;
    }
  }, [range, selectedValue]);

  const styles = {
    scroll: {
      msOverflowStyle: "none", // IE and Edge
      scrollbarWidth: "none", // Firefox
    },
    boldValue: {
      fontSize: "16pt",
      fontWeight: "bold",
    },
    rollerOuter: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "14pt",
      margin: 0,
      padding: 0,
    },

    scrollList: {
      scrollSnapType: "y mandatory",
      height: "9rem",
      overflowY: "scroll",
      width: unit ? "66.666%" : "100%",
      scrollbarWidth: "none",
      listStyle: "none",
      paddingLeft: 0,
    },
    scrollLi: {
      height: "33.333%",
      scrollSnapAlign: "start",
      listStyleType: "none",
    },
    scrollLi2: {
      height: "33.333%",
      scrollSnapAlign: "start",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    unit: {
      width: unit ? "33.333%" : "0%",
    },
    webkitScrollbar: `
      .example::-webkit-scrollbar {
        display: none;
      }
    `, // Chrome
  };

  return (
    <div style={{ ...styles.rollerOuter, ...rollerContainerStyle }}>
      <ul style={{ ...styles.scroll, ...styles.scrollList }} ref={ulRef}>
        <style>{styles.webkitScrollbar}</style>
        <li style={styles.scrollLi}></li>
        {range.map((value) => {
          return (
            <li
              key={value}
              style={
                selectedValue === value
                  ? { ...styles.boldValue, ...styles.scrollLi2, ...selectedItemStyle }
                  : {...styles.scrollLi2, ...unselectedItemsStyle}
              }
            >
              {value}
            </li>
          );
        })}
        <li style={styles.scrollLi}></li>
      </ul>
      {unit && <p style={{...styles.unit, ...unitStyle}}>{unit}</p>}
    </div>
  );
};

TimeRoller.defaultProps = {
  unit: null,
  selectedItemStyle: {},
  unselectedItemsStyle: {},
  rollerContainerStyle: {},
  unitStyle: {},
};

export default TimeRoller;
