class DataAccess {
  static db:string = 'Sqlserver'
  // private db:string = 'Access'
  public static createDepartment() { 
    switch(this.db) {
      case 'Sqlserver':
        return new SqlServerDepartment()
      case 'Access':
        return new AccessDepartment()
    }
  }
}

const dept = new Department()
const id = DataAccess.createDepartment()
id.Insert(dept)
id.GetDepartment(1)