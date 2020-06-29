//zaminics na regexp
const formatDescription = (text) => {
  if (text)
    return text
      .replace("<p>", "")
      .replace("</p>", "")
      .replace("<li>", "")
      .replace("</li>", "")
      .replace("<ul>", "")
      .replace("</ul>", "")
      .replace("<div>", "")
      .replace("</div>", "")
      .replace("&bdquo;", "")
      .replace("&ndash;", "")
      .replace("&oacute;", "ó")
      .replace("&nbsp;", "")
      .replace("&quot;", "");
  else return null;
};
export default formatDescription;
