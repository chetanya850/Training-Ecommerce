import * as fs from 'fs'
import puppeteer from 'puppeteer'
const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      height: 800,
      width: 1000
    }
  })

  const page = await browser.newPage()
  await page.goto('https://www.nike.com/in/')
  await page.type('#VisualSearchInput', 'men')
  await page.keyboard.press('Enter')
  await page.waitForNavigation()
  await page.screenshot({ path: 'testresult.png', fullPage: true })

  const jsonData = await page.evaluate(() => {
    let mainData = []

    for (let i = 0; i < 10; i++) {
      const selector = `#skip-to-products > div:nth-child(${
        i + 1
      }) > div > figure > a.product-card__img-link-overlay > div > img`
      const selector2 = `#skip-to-products > div:nth-child(${
        i + 1
      }) > div > figure > a.product-card__link-overlay`
      const selector3 = `#skip-to-products > div:nth-child(${
        i + 1
      }) > div > figure > div > div.product-card__animation_wrapper > div > div > div > div`
      const selector4 = `#skip-to-products > div:nth-child(${
        i + 1
      }) > div > figure > div > div.product-card__count-wrapper.show--all.false > div > button > div`

      const priceElement = document.querySelector(selector3)
      const imageElement = document.querySelector(selector)
      const titleElement = document.querySelector(selector2)
      const colorElement = document.querySelector(selector4)

      // titles.push(titleElement.innerText)

      mainData[i] = {
        itemName: titleElement.innerText == null ? '' : titleElement.innerText,
        imageSrc: imageElement.src == null ? '' : imageElement.src,
        price: priceElement.innerText == null ? '' : priceElement.innerText,
        colors: colorElement.innerText == null ? '' : colorElement.innerText
      }
    }
    return mainData
  })

  // const imageUrls = await page.evaluate(() => {
  //   const urls = []
  //   for (let i = 0; i < 10; i++) {
  //     const selector = `#skip-to-products > div:nth-child(${
  //       i + 1
  //     }) > div > figure > a.product-card__img-link-overlay > div > img`

  //     const imgElement = document.querySelector(selector)
  //     if (imgElement) {
  //       urls.push(imgElement.src)
  //     } else {
  //       console.error(`Image element not found for selector: ${selector}`)
  //     }
  //   }
  //   return urls
  // })
  const filepath = 'output.json'
  const jsonString = JSON.stringify(jsonData, null, 2)
  fs.writeFileSync(filepath, jsonString)

  console.log(jsonData)
}

main()
