describe('Task 1: Adding background to the header.', () => {
    const fs = require('fs');
    const path = require('path')
    const cssDoc = fs.readFileSync(path.join(__dirname, '../task-1/style.css'), 'utf8');
    test('"background.jpg" background added to the header.', () => {
        expect(cssDoc.replace(/ /g,'')).toContain("background-image:url(\"./assets/background.jpg\")");
    })
    test('background size is contain header.', () => {
        expect(cssDoc.replace(/ /g,'')).toContain("background-size:contain");
    })
    test('background repeated.', () => {
        expect(cssDoc.replace(/ /g,'')).toContain("background-repeat:repeat");
    })
}) 

describe('Task 2: Adding background to each section.', () => {
    const fs = require('fs');
    const path = require('path')
    const css2Doc = fs.readFileSync(path.join(__dirname, '../task-2/style.css'), 'utf8').replace(/ /g,'');
    test('"task2-bg.jpeg" background inside info-1 class.', () => {
        expect(css2Doc.replace(/(\r\n|\n|\r)/gm,"")).toContain("info-1{background-image:url(\"./assets/task2-bg.jpeg");
    })
    test('"task2-bg1.jpeg" background inside info-2 class.', () => {
        expect(css2Doc.replace(/(\r\n|\n|\r)/gm,"")).toContain("info-2{background-image:url(\"./assets/task2-bg1.jpeg");
    })
    test('"task2-bg2.jpg" background inside info-3 class.', () => {
        expect(css2Doc.replace(/(\r\n|\n|\r)/gm,"")).toContain("info-3{background-image:url(\"./assets/task2-bg2.jpg");
    })
    test('Sections is side-by-side.', () => {
        expect(css2Doc.replace(/(\r\n|\n|\r)/gm,"")).toContain("display:inline-block;");
    })
}) 