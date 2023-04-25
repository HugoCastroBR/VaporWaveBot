function shorten(str,size) {
  if (str.length > size) {
      return str.substring(0, size + 1) + '...';
  } else {
      return str;
  }
}

export default shorten;