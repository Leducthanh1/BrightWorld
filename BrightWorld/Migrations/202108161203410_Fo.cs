namespace BrightWorld.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Fo : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "Price", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "Price", c => c.Double(nullable: false));
        }
    }
}