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
    },
    rollerOuter: {
      position: "relative",
      width: "100%",
      border: "1px solid black",
      height: "3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "14pt",
      margin: 0,
      padding: 0,
    },

    scrollList: {
      scrollSnapType: "y mandatory",
      height: "3rem",
      overflowY: "scroll",
      width: "66.666%",
      scrollbarWidth: "none",
    },
    scrollLi: {
      height: "3rem",
      scrollSnapAlign: "start",
      listStyleType: "none",
    },
    scrollLi2: {
      height: "100%",
      scrollSnapAlign: "start",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#9C9C9C",
    },
    unit: {
      width: "33.333%",
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
      </ul>
      <p style={styles.unit}>{unit}</p>
    </div>
  );
};

export default TimeRoller;
