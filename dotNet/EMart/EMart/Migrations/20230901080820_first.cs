using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace EMart.Migrations
{
    /// <inheritdoc />
    public partial class first : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    CatmasterId = table.Column<int>(name: "Catmaster_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    CategoryName = table.Column<string>(type: "longtext", nullable: true),
                    CatId = table.Column<string>(name: "Cat_Id", type: "longtext", nullable: true),
                    SubcatId = table.Column<string>(name: "Subcat_Id", type: "longtext", nullable: true),
                    CatImgPath = table.Column<string>(type: "longtext", nullable: true),
                    Flag = table.Column<bool>(type: "tinyint(1)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.CatmasterId);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    CustId = table.Column<int>(name: "Cust_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    AddLine1 = table.Column<string>(type: "longtext", nullable: true),
                    AddLine2 = table.Column<string>(type: "longtext", nullable: true),
                    City = table.Column<string>(type: "longtext", nullable: true),
                    CustName = table.Column<string>(type: "longtext", nullable: true),
                    Email = table.Column<string>(type: "longtext", nullable: true),
                    Gender = table.Column<string>(type: "varchar(1)", nullable: false),
                    PhoneNo = table.Column<long>(type: "bigint", nullable: false),
                    Pincode = table.Column<long>(type: "bigint", nullable: true),
                    RedeemPoints = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.CustId);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    ProductId = table.Column<int>(name: "Product_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    ProductName = table.Column<string>(type: "longtext", nullable: true),
                    ProductDescription = table.Column<string>(type: "longtext", nullable: true),
                    ProductImage = table.Column<string>(type: "longtext", nullable: true),
                    MrpPrice = table.Column<int>(type: "int", nullable: false),
                    CardholdersPrice = table.Column<int>(type: "int", nullable: false),
                    PointsToBeRedeem = table.Column<int>(name: "Points_To_Be_Redeem", type: "int", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    CatmasterId = table.Column<int>(name: "Catmaster_Id", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.ProductId);
                    table.ForeignKey(
                        name: "FK_Product_Category_Catmaster_Id",
                        column: x => x.CatmasterId,
                        principalTable: "Category",
                        principalColumn: "Catmaster_Id",
                        onDelete: ReferentialAction.Restrict);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Authentication",
                columns: table => new
                {
                    AuthId = table.Column<int>(name: "Auth_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Uname = table.Column<string>(type: "longtext", nullable: false),
                    Pass = table.Column<string>(type: "longtext", nullable: false),
                    custId = table.Column<int>(name: "cust_Id", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authentication", x => x.AuthId);
                    table.ForeignKey(
                        name: "FK_Authentication_Customer_cust_Id",
                        column: x => x.custId,
                        principalTable: "Customer",
                        principalColumn: "Cust_Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Invoice",
                columns: table => new
                {
                    InvoiceId = table.Column<int>(name: "Invoice_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    InvDate = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    PayableAmt = table.Column<double>(type: "double", nullable: false),
                    Tax = table.Column<double>(type: "double", nullable: false),
                    TotalAmt = table.Column<double>(type: "double", nullable: false),
                    CustId = table.Column<int>(name: "Cust_Id", type: "int", nullable: false),
                    CustomerCustId = table.Column<int>(name: "CustomerCust_Id", type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoice", x => x.InvoiceId);
                    table.ForeignKey(
                        name: "FK_Invoice_Customer_CustomerCust_Id",
                        column: x => x.CustomerCustId,
                        principalTable: "Customer",
                        principalColumn: "Cust_Id");
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Cart",
                columns: table => new
                {
                    cartId = table.Column<int>(name: "cart_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    custId = table.Column<int>(name: "cust_Id", type: "int", nullable: false),
                    productId = table.Column<int>(name: "product_Id", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cart", x => x.cartId);
                    table.ForeignKey(
                        name: "FK_Cart_Product_product_Id",
                        column: x => x.productId,
                        principalTable: "Product",
                        principalColumn: "Product_Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Authentication_cust_Id",
                table: "Authentication",
                column: "cust_Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cart_product_Id",
                table: "Cart",
                column: "product_Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Invoice_CustomerCust_Id",
                table: "Invoice",
                column: "CustomerCust_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Product_Catmaster_Id",
                table: "Product",
                column: "Catmaster_Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Authentication");

            migrationBuilder.DropTable(
                name: "Cart");

            migrationBuilder.DropTable(
                name: "Invoice");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "Category");
        }
    }
}
