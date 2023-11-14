const Origin = process.env.REACT_REQUEST_LANG_HOST || `https://img.dsers.com`;

export const fetchOriginLangs = async (lang = 'EN') => {
  try {
    const response = await fetch(
      `${Origin}/product_langs/dev_content/website/${lang.toUpperCase()}.json`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      throw new Error('Empty or invalid JSON data');
    }

    return data;
  } catch (error) {
    // 处理错误，可以选择抛出自定义错误或者返回一个错误对象
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch language data');
  }
};
