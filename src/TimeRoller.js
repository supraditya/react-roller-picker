import React, { useEffect, useRef } from "react";

const TimeRoller = ({ range, unit, selectedValue, setSelectedValue }) => {
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
  }, []);

  const styles = {
    scroll: {
      msOverflowStyle: "none", // IE and Edge
      scrollbarWidth: "none", // Firefox
    },
    boldValue: {
      fontSize: "16pt",
      fontWeight: "bold",
      color: "#00274C",
      transition: "all 0.2 ease-in-out",
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
      height: "33%",
      scrollSnapAlign: "start",
      listStyleType: "none",
    },
    scrollLi2: {
      height: "33%",
      scrollSnapAlign: "start",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#9C9C9C",
      transition: "all 0.2 ease-in-out",
    },
    unit: {
      width: unit ? "33.333%" : "0%",
      color: "#626262",
    },
    webkitScrollbar: `
      .example::-webkit-scrollbar {
        display: none;
      }
    `, // Chrome
  };

  return (
    <div style={styles.rollerOuter}>
      <ul style={{ ...styles.scroll, ...styles.scrollList }} ref={ulRef}>
        <style>{styles.webkitScrollbar}</style>
        <li style={styles.scrollLi}></li>
        {range.map((value) => {
          return (
            <li
              key={value}
              style={
                selectedValue === value
                  ? { ...styles.boldValue, ...styles.scrollLi2 }
                  : styles.scrollLi2
              }
            >
              {value}
            </li>
          );
        })}
        <li style={styles.scrollLi}></li>
      </ul>
      {unit && <p style={styles.unit}>{unit}</p>}
    </div>
  );
};

export default TimeRoller;
