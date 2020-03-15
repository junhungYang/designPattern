class TestPaper {
  public Q1() {
    console.log('你喜欢的运动？A、篮球 B、足球 C、羽毛球')
    console.log(`答案：${this.Answer1()}`)
  }
  protected Answer1() {
    return ''
  }
  public Q2() {
    console.log('你喜欢喝咖啡吗？A、喜欢 B、一般般 C、不喜欢')
    console.log(`答案：${this.Answer2()}`)
  }
  protected Answer2() {
    return ''
  }
  public Q3() {
    console.log('你擅长的外语？A、英语 B、日语 C、韩语')
    console.log(`答案: ${this.Answer3()}`)
  }
  protected Answer3() {
    return ''
  }
}

/**学生A作答的试卷 */
class TestPaperA extends TestPaper {
  protected Answer1() {
    return 'A'
  }
  protected Answer2() {
    return 'B'
  }
  protected Answer3() {
    return 'C'
  }
}

/**学生B作答的试卷 */
class TestPaperB extends TestPaper {
  protected Answer1() {
    return 'A'
  }
  protected Answer2() {
    return 'A'
  }
  protected Answer3() {
    return 'A'
  }
}