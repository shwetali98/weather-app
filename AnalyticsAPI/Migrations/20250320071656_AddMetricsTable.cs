using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AnalyticsAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddMetricsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Value",
                table: "Metrics",
                newName: "WindSpeed");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Metrics",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Condition",
                table: "Metrics",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<double>(
                name: "Rainfall",
                table: "Metrics",
                type: "double",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Temperature",
                table: "Metrics",
                type: "double",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateTable(
                name: "WeatherMetrics",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    City = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Timestamp = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Temperature = table.Column<double>(type: "double", nullable: false),
                    Rainfall = table.Column<double>(type: "double", nullable: false),
                    WindSpeed = table.Column<double>(type: "double", nullable: false),
                    Condition = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeatherMetrics", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WeatherMetrics");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "Condition",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "Rainfall",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "Temperature",
                table: "Metrics");

            migrationBuilder.RenameColumn(
                name: "WindSpeed",
                table: "Metrics",
                newName: "Value");
        }
    }
}
